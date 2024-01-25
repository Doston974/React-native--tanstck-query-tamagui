import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailsPage from 'components/DetailsPage'
import { MediaType } from 'interfaces'

const Page = () => {
    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <DetailsPage id={id} mediaType={MediaType.Movie} />
    )
}

export default Page