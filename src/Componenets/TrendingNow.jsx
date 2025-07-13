
import React, { useEffect, useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MovieCard = ({ index, title, poster }) => {
    return (
        <div className="min-w-[160px] flex-shrink-0">
            <div className="relative group">
                <img
                    src={poster !== 'N/A' ? poster : '/fallback.jpg'}
                    alt={title}
                    className="w-full lg:h-80 md:h-56 sm:h-44 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-30  px-2 py-1 text-7xl font-bold text-black text-outline-white">
                    {index}
                </div>

            </div>
            {/* <p className="mt-2 text-center font-bold text-white text-sm">
        {title}
      </p> */}
        </div>
    );
};

const TrendingSection = () => {
    const [movies, setMovies] = useState([]);
    const scrollRef = useRef();

    useEffect(() => {
        const fetchMovies = async () => {
            const searchTerms = [
                'avengers',
                'inception',
                'interstellar',
                'joker',
                'tenet',
                'batman',
                'iron man',
                'spider man',
                'doctor strange',
                'black widow'
            ];

            const apiKey = '690369c7';
            const fetchedMovies = [];

            for (let i = 0; i < searchTerms.length; i++) {
                try {
                    const res = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(searchTerms[i])}&apikey=${apiKey}`);
                    const data = await res.json();

                    if (data.Search && data.Search[0]) {
                        fetchedMovies.push({
                            id: i + 1,
                            title: data.Search[0].Title,
                            poster: data.Search[0].Poster,
                        });
                    }
                } catch (error) {
                    console.error('Error fetching movie:', searchTerms[i], error);
                }
            }

            setMovies(fetchedMovies);
        };

        fetchMovies();
    }, []);

    const scroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = 300;
        if (direction === 'left') container.scrollLeft -= scrollAmount;
        else container.scrollLeft += scrollAmount;
    };

    return (
        <section className="relative bg-black text-white  py-12 sm:px-10 md:px-10 lg:px-40">
            <h2 className="text-2xl font-bold mb-4">Trending Now</h2>

            {/* Left Arrow */}
            <button
                className="absolute h-32 left-13 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 hidden sm:block"
                onClick={() => scroll('left')}
            >
                <FaChevronLeft size={20} />
            </button>

            {/* Scrollable Movies Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide  pb-4 scroll-smooth no-scrollbar"
            >
                {movies.map((movie, index) => (
                    <MovieCard
                        key={movie.id}
                        index={index + 1}
                        title={movie.title}
                        poster={movie.poster}
                    />
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className="absolute md:right-20 sm:right-5 h-32 lg:right-36 top-1/2 -translate-y-1/2 z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 hidden sm:block"
                onClick={() => scroll('right')}
            >
                <FaChevronRight size={20} />
            </button>
        </section>
    );
};

export default TrendingSection;

