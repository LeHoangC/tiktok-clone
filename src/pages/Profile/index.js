import { useParams } from 'react-router-dom'

function Profile() {
	const { nickname } = useParams()

	return <div>Profile page ${nickname}</div>
}

export default Profile
