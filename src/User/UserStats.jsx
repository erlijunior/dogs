import React from 'react'
import Head from '../Components/Helper/Head'
import Loading from '../Components/Helper/Loading'
import Error from '../Components/Helper/Error'
import useFetch from '../Hooks/useFetch'
import { STATS_GET } from '../api'
import UserStatsGraphs from './UserStatsGraphs'

const UserStats = () => {
	const { data, error, loading, request } = useFetch()

	React.useEffect(() => {
		async function getData() {
			const token = window.localStorage.getItem('token')
			const { url, options } = STATS_GET(token)
			await request(url, options)
		}
		getData()
	}, [request])

	if (loading) return <Loading />
	if (error) return <Error error={error} />
	if (data)
		return (
			<div>
				<Head title='Estatísticas' />
				<UserStatsGraphs data={data} />
			</div>
		)
	else return null
}
export default UserStats
