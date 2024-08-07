import ReactPlayer from 'react-player'
import { useAppDispatch } from '../store'
import { nextLesson, useCurrentLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

 const { currentLesson } = useCurrentLesson()

  function handlePlayNextLesson() {
    dispatch(nextLesson())
  }

  if(!currentLesson){
    return null
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNextLesson}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
