const details = {
    1: {
        name: 'Thomas Morse',
        url: 'https://unsplash.com/@timorse',
        imageUrl: 'https://unsplash.com/photos/OnN8rul32fk'
    },
    2: {
        name: 'Thomas Morse',
        url: 'https://unsplash.com/@timorse',
        imageUrl: 'https://unsplash.com/photos/KjPO7zA8Dy0'
    },
    3: {
        name: 'Thomas Morse',
        url: 'https://unsplash.com/@timorse',
        imageUrl: 'https://unsplash.com/photos/green-and-beige-trees-beside-mountains-cuKKa0vWZSY'
    },
    4: {
        name: 'Thomas Morse',
        url: 'https://unsplash.com/@timorse',
        imageUrl: 'https://unsplash.com/photos/people-standing-on-bridge-above-waterfalls-during-daytime-KtxHckjZMOE'
    },
    5: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/people-on-seashore-near-house-4TXgmQSkv8Q'
    },
    6: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/qt_LaZwx6DA'
    },
    7: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/FIcqY2sbVHg'
    },
    8: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/scenery-of-mountain-oMneOBYhJxY'
    },
    9: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/xSFE-8DqM_E'
    },
    10: {
        name: 'John Lee',
        url: 'https://unsplash.com/@john_artifexfilm',
        imageUrl: 'https://unsplash.com/photos/XFxnoytEvVs'
    },
    11: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/the-sun-shines-through-the-clouds-over-a-valley-aQt_OGH_N94'
    },
    12: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/a-foggy-landscape-with-trees-and-hills-in-the-distance-4FFD0GL-HEs'
    },
    13: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/a-foggy-field-with-trees-and-mountains-in-the-background-6QgS3nUhMXs'
    },
    14: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/a-view-of-a-large-wave-crashing-over-a-fence-kta-0d0bHy8'
    },
    15: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/a-bird-flying-high-up-in-the-sky-tp7cqxXdees'
    },
    16: {
        name: 'Chris Barbalis',
        url: 'https://unsplash.com/@cbarbalis',
        imageUrl: 'https://unsplash.com/photos/a-foggy-valley-with-trees-in-the-distance-KmM_9__dfnQ'
    }
};

export function ImageDetails({ id }) {
    const img = details[id];
    return (
        <div className="absolute w-full h-full bg-blue-200 flex justify-center items-center text-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="p-2 rounded-xl bg-white">
                Photo by{' '}
                <a href={`${img.url}?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}>{img.name}</a>{' '}
                on{' '}
                <a href={`${img.imageUrl}?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}>
                    Unsplash
                </a>
            </div>
        </div>
    );
}
