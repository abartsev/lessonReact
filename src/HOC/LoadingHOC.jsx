import React, {Component} from 'react'

const isEmpty = (prop) => {
    console.log(prop)
    return(
    prop === null||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0)||
    (prop.constructor === Object && Object.keys(prop).length === 0)
    )};
const Spiner = () =>{
    console.log('Spiner');
    
    return(<div style={{width: '30px', height: '30px', background: "red" }}>{'Loading'}</div>)
} 
const LoadingHOC = (loadingProp) => (WrappedComponent) =>{
  return  class LoadingHOC extends Component {
    
    render() {
        console.log(this.props[loadingProp])
          return isEmpty(this.props[loadingProp]) ?
          <Spiner />
          : <WrappedComponent {...this.props} />;
      }
    }
}

export default LoadingHOC
