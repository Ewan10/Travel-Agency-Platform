import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { destinations } from './data/destinations';
import DestinationCard from './DestinationCard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

export default function DestinationCarousel() {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            slidesPerView={3}
        >
            {
                destinations.map((destination) => (
                    <>
                        <SwiperSlide key={destination.id}>
                            <DestinationCard
                                title={destination.title}
                                country={destination.country}
                                image={destination.image}
                                rating={destination.rating}
                            />
                        </SwiperSlide>
                    </>
                ))
            }
        </Swiper>
    );
}