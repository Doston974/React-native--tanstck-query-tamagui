import { MediaType } from 'interfaces';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from 'services/api';
import { Main, ScrollView, YStack, H1, Text, Paragraph, Button, useTheme } from 'tamagui';
import { ImageBackground } from 'react-native';
import Animated from 'react-native-reanimated';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

type DetailsPageProps = {
    id: string;
    mediaType: MediaType;
}

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {

    const [isFavorite, setIsFavorite] = useState(`${mediaType}-${id}`)
    const [favorites, setFavorites] = useState('favorites')
    const theme = useTheme()

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieDetails(+id, mediaType),
    })

    const toggleFavorite = () => { }

    return (
        <Main>
            <Stack.Screen
                options={{
                    headerRight: () => (
                        <Button
                            unstyled
                            onPress={toggleFavorite}
                            scale={0.95}
                            hoverStyle={{ scale: 0.925 }}
                            pressStyle={{ scale: 0.975 }}
                            animation={'bouncy'}>
                            <Ionicons
                                name={isFavorite ? 'heart-outline' : 'heart'}
                                size={26}
                                color={theme.blue9.get()}
                            />
                        </Button>
                    ),
                }}
            />
            <ScrollView>
                <ImageBackground
                    source={{
                        uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}`,
                    }}>
                    <Animated.Image
                        borderRadius={6}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`,
                        }}
                        style={{ width: 200, height: 300, margin: 10 }}
                        sharedTransitionTag={`${mediaType === 'movie' ? 'movie' : 'tv'}-${id}`}
                    />
                </ImageBackground>

                <YStack
                    p={10}
                    animation={"lazy"}
                    enterStyle={{
                        opacity: 0,
                        y: 10,
                    }}
                >
                    <H1 color={'$blue7'}>
                        {movieQuery.data?.title || movieQuery.data?.name}<Text fontSize={16}>(2023)</Text>
                    </H1>
                    <Paragraph theme={"alt2"}>
                        {movieQuery.data?.tagline}
                    </Paragraph>
                    <Text fontSize={16}>
                        {movieQuery.data?.overview}
                    </Text>
                </YStack>
            </ScrollView>
        </Main>
    )
}

export default DetailsPage