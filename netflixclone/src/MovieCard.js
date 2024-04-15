
function MovieCard(props) {
    console.log(props)
    return (
        <div>
            <div class="card" style={{ width: 20 + 'em' }}>
                <img src={props.imageUrl} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h6 class="card-title">{props.title}</h6>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;