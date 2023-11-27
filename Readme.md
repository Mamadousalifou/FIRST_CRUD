link :"https://www.youtube.com/watch?v=enOsPhp2Z6Q&ab_channel=CodeWithYousaf"









const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()

  const Submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result =>console.log(result))
    .catch(err => console.log(err))
  }