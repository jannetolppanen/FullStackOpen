export const Course = ( {course} ) => {
    return (
      <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </>
    )
  }

const Header = ( {course} ) => {
  return (

    <>
      <h1>{course.name}</h1>
    </>
  )
}

const Content = ( {course} ) => {
  return (
    <>
      {course.parts.map((part, i) => 
      <Part key={i} part={part} />
      )}
    </>
  )
}

const Part = ( {part} ) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}

const Total = ( {course} ) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises
    }, 0)

  return (
    <>
      <b>total of {totalExercises} exercises</b>
    </>
  )
}