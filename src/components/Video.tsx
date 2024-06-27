import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store'
import { nextLesson } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const lesson = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex} = state.palyer

    const currentLesson = 
      state.palyer.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })

  function handlePlayNextLesson() {
    dispatch(nextLesson())
  }
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNextLesson}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
