import 'react-toastify/dist/ReactToastify.css'
import Loading from './Loading'

const NowShowing = ({ movies, selectedMovieIndex, setSelectedMovieIndex, auth, isFetchingMoviesDone }) => {
	return (
		<div className="mx-4 flex flex-col rounded-md bg-gradient-to-br from-indigo-200 to-blue-100 p-4 text-gray-900 drop-shadow-md sm:mx-8 sm:p-6">
			<h2 className="text-3xl font-bold">Now Showing</h2>
			{isFetchingMoviesDone ? (
				movies.length ? (
					<div className="mt-1 overflow-x-auto sm:mt-3">
						<div className="mx-auto flex w-fit gap-4">
							{movies?.map((movie, index) => {
								return movies.find((movie)=>(movie._id===selectedMovieIndex))?._id === movie._id ? (
									<div
										key={index}
										title={movie.name}
										className="flex w-[108px] flex-col rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 p-1 text-white drop-shadow-md hover:from-indigo-500 hover:to-blue-400 sm:w-[144px]"
										onClick={() => {
											setSelectedMovieIndex(null)
											sessionStorage.setItem('selectedMovieIndex', null)
										}}
									>
										<img
											src={movie.img}
											className="h-36 rounded-md object-cover drop-shadow-md sm:h-48"
										/>
										<p className="truncate pt-1 text-center text-sm font-semibold leading-4">
											{movie.name}
										</p>
										<button style={{color: 'white', backgroundColor: 'gray', marginTop:10, borderRadius: 4}} type="button" onClick={()=>{window.location.href=`/movie-detail/${movie._id}`}}>Detail</button>
									</div>
								) : (
									<div
										key={index}
										className="flex w-[108px] flex-col rounded-md bg-white p-1 drop-shadow-md hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-400 hover:text-white sm:w-[144px]"
										onClick={() => {
											setSelectedMovieIndex(movie._id)
											sessionStorage.setItem('selectedMovieIndex', movie._id)
										}}
									>
										<img
											src={movie.img}
											className="h-36 rounded-md object-cover drop-shadow-md sm:h-48"
										/>
										<p className="truncate pt-1 text-center text-sm font-semibold leading-4">
											{movie.name}
										</p>
										<button style={{color: 'white', backgroundColor: 'gray', marginTop:10, borderRadius: 4}} type="button" onClick={()=>{window.location.href=`/movie-detail/${movie._id}`}}>Detail</button>

									</div>
								)
							})}
						</div>
					</div>
				) : (
					<p className="mt-4 text-center">There are no movies available</p>
				)
			) : (
				<Loading />
			)}
		</div>
	)
}

export default NowShowing
