import { useRouter } from 'next/router'

const LearnPage = () => {
    const router = useRouter()
    const { carId } = router.query
    return <p>Car: {carId}</p>
}

export default LearnPage
