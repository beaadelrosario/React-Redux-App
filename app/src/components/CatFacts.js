import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCatFacts } from "../store";

const CatFacts = (props) => {
  useEffect(() => {
    props.fetchCatFacts();
  }, []);

  return (
    <section>
      <h1>🐱 Random Cat Facts! 🐱</h1>
      {props.isLoading ? <h4>Loading Cat Facts...😸</h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}>OOPS! Error loading:${props.error}. 🙀</p>
      ) : null}
      {props.catFacts.length > 0 ? (
        <div className='factContainer'>
          {props.catFacts.map((catFacts) => (
            <ul className='list'>
              <img
                className="imageofcat"
                src="https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1404&q=80"
                alt="cat pic"
              />
              <li style={{ listStyle: "none" }}>{catFacts.text}</li>
            </ul>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    catFacts: state.catFacts,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchCatFacts })(CatFacts);
