import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Photo } from '../../dtos/CarDTO';

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrl: Photo[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index)
    })

    return (
        <Container>
            <ImageIndexes>
                {imagesUrl.map((item, index) => (
                    <ImageIndex active={index === imageIndex} key={item.id} />
                ))}
            </ImageIndexes>

            <FlatList
                data={imagesUrl}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item.photo }}
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                onViewableItemsChanged={indexChanged.current}
            />
        </Container>
    );
}