const Practice = () => {
  const students = [89,89,33];
  return (
    <>
      <h1>Practice Interview Quetions: </h1>
      {/* <p>{!students.length && "no students found"}</p> */}
      {/* <p>{students.length === 0 && "no students found"}</p> */}
       <p>{Boolean(!students.length) && "no students found"}</p>  
      <p>number of students: {students.length}</p>
    </>
  );
};
export default Practice;
