import React from 'react';

export default function Member(props) {
    const results = props.information.results
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-12 mx-auto'>
                    <ul className='list-group'>
                        {results.map((value,index) => {
                            return <li key={index} className="list-group-item list-group-item-info list-group-item-action">{index+1} {value.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
    const data = await response.json()
    return {
      props: {
        information:data
      }, 
    }
}

