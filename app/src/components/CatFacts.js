import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCatFacts } from "../store"

const CatFacts = props => {
    useEffect(() => {
        props.fetchCatFacts();
    }, [])

    return (
        <section>
            <h1>🐱 Random Cat Facts! 🐱</h1>
            {props.isLoading ? <h4>Loading Cat Facts...😸</h4> : null}
            {props.error ? (<p style={{color:"red"}}>OOPS! Error loading:${props.error}. 🙀</p>
             ) : null}
             {props.catFacts.length > 0 ? <div>{props.catFacts.map(catFacts => (
                 <ul>
                     <li style={{listStyle:"none"}}>{catFacts.text}</li> <hr></hr>
                 </ul>
             )) }</div> : null}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        catFacts:state.catFacts,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchCatFacts})(CatFacts);