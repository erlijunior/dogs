import { useParams } from 'react-router-dom'
import Feed from '../Components/Feed/Feed'
import Head from '../Components/Helper/Head'

const UserProfile = () => {
	const { user } = useParams()
	return (
		<section className='container mainContainer'>
			<Head title={user} description='Perfil de usuário, com a feed de fotos.' />
			<h1 className='title'>{user}</h1>
			<Feed user={user} />
		</section>
	)
}
export default UserProfile
