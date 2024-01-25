import { useQuery } from '@tanstack/react-query'
import { getTrending } from './../../../services/api';
import { ImageBackground } from 'react-native';
import { Container, Main, Subtitle, Title } from 'tamagui.config';
import { Input, ScrollView, Spinner, YStack } from 'tamagui';
import { useState } from 'react';
import MovieCard from 'components/MovieCard';

const Page = () => {
    const [searchString, setSearchString] = useState("")

    const trendingQuery = useQuery({
        queryKey: ['trending'],
        queryFn: getTrending,
    })

    const searchQuery = useQuery({
        queryKey: ['search', searchString],
        queryFn: getTrending,
    })

    return (
        <Main>
            <ImageBackground
                source={{
                    uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
                }}
                style={{ width: '100%', height: 200 }} >
                <Container>
                    <YStack>
                        <Title
                            color={"#fff"}
                            enterStyle={{
                                opacity: 0,
                                scale: 2,
                                y: -10
                            }}
                            animation="quick"
                        >
                            Mashhur
                        </Title>
                        <Input
                            placeholder='Kino, serial, korsatuvlar qidirish...'
                            placeholderTextColor={"#fff"}
                            borderWidth={1}
                            size={'$4'}
                            value={searchString}
                            onChangeText={(text) => setSearchString(text)}
                        />
                    </YStack>
                </Container>
            </ImageBackground>

            <Subtitle
                p={10}
                enterStyle={{
                    opacity: 0
                }}
                animation="lazy">
                Mashhurlar
            </Subtitle>
            {(trendingQuery.isLoading || searchQuery.isLoading) && (
                <Spinner py={14} size='large' color={'$blue10'} />
            )}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                py={40}
                contentContainerStyle={{ gap: 14, paddingLeft: 14 }}
            >
                {trendingQuery.data?.results.map((item) =>
                    <MovieCard key={item.id} movie={item} />
                )}
            </ScrollView>
        </Main>
    )
}

export default Page