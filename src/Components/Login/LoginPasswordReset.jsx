import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { PASSWORD_RESET } from '../../api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
	const [login, setLogin] = React.useState('')
	const [key, setKey] = React.useState('')
	const password = useForm()
	const { loading, error, request } = useFetch()
	const navigate = useNavigate()

	async function handleSubmit(event) {
		if (password.validate()) {
			event.preventDefault()
			const { url, options } = PASSWORD_RESET({ login, key, password: password.value })
			const { response } = await request(url, options)
			if (response.ok) navigate('/login')
		}
	}

	React.useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const key = params.get('key')
		const login = params.get('login')
		if (key) setKey(key)
		if (login) setLogin(login)
	}, [])

	return (
		<div>
			<h1 className='title'>Resete a senha</h1>

			<form onSubmit={handleSubmit}>
				<Input label='Nova senha' type='password' name='password' {...password} />
				{loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
			</form>
			<Error error={error} />
		</div>
	)
}
export default LoginPasswordReset
