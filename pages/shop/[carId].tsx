import { useRouter } from 'next/router'

const ShopPage = () => {
    const router = useRouter()
    const { carId } = router.query
    return <p>Car: {carId}</p>
}

export default ShopPage
