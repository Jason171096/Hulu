import Thumbnail  from './Thumbnail'

function Results({ results }) {
    
    const objectToArray = (results) => {
        let arrayFirst, arraySecond  = new Array()
        arrayFirst = Object.values(results)
        arraySecond = arrayFirst[0]
        return arraySecond
    }

    return (
        <div>
            {objectToArray(results).map((result) => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results
