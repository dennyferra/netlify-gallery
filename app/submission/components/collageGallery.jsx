'use client';

import { ImageSelector } from './imageSelector';
import { useState } from 'react';
import { getImageUrl } from 'utils';
import { ImageDetails } from './imageDetails';

class Collagery {
    items = [];
    last = null;

    constructor() {}

    add(image, width = 1, half = false, quality = 90) {
        if (half) {
            if (this.last) {
                this.last.push({ image, quality });
                this.last = null;
            } else {
                this.last = [{ image, quality }];
                this.items.push(this.last);
            }
            return;
        }

        this.items.push({ image, width, quality });
    }
}

const collagery = new Collagery();
collagery.add('1', 1);
collagery.add('7', 1, true);
collagery.add('8', 1, true);
collagery.add('2', 1);
collagery.add('9', 1);
collagery.add('3', 2);
collagery.add('4', 1, true);
collagery.add('5', 1, true);
collagery.add('6', 1);

export function CollageGallery() {
    const [items, setItems] = useState(collagery.items);

    const handleAdd = ({ selected, width, height, quality }) => {
        collagery.add(selected, width, height === 2, quality);
        setItems([...collagery.items]);
    };
    const handleClear = () => {
        collagery.items = [];
        setItems(collagery.items);
    };

    return (
        <>
            <ImageSelector onAdd={handleAdd} onClear={handleClear} />
            <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold sm:text-2xl">Your Collagery</h2>
                <div className="w-full max-w-full bg-slate-900 rounded-xl grid grid-cols-2 gap-1 p-2">
                    {items.map((cell, idx) => {
                        if (Array.isArray(cell)) {
                            return (
                                <div key={idx} className="flex flex-col gap-1">
                                    <div className="h-1/2 relative group">
                                        <ImageDetails id={cell[0].image} />
                                        <img
                                            srcSet={getImageUrl(cell[0].image + '.jpg', { quality: cell[0].quality })}
                                            sizes="(max-width: 100vw) 360px, 360px"
                                            className="w-full h-full"
                                            alt="Hello world"
                                        />
                                    </div>
                                    <div className="h-1/2 relative group">
                                        {cell.length > 1 ? (
                                            <>
                                                <ImageDetails id={cell[1].image} />
                                                <img
                                                    srcSet={getImageUrl(cell[1].image + '.jpg', {
                                                        quality: cell[1].quality
                                                    })}
                                                    sizes="(max-width: 100vw) 360px, 360px"
                                                    className="w-full h-full"
                                                    alt="Hello world"
                                                />
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        }

                        if (cell.width) {
                            const colSpan = cell.width === 2 ? 'col-span-2' : '';
                            return (
                                <div key={idx} className={`${colSpan} relative group`}>
                                    <ImageDetails id={cell.image} />
                                    <img
                                        srcSet={getImageUrl(cell.image + '.jpg', {
                                            fit: 'contain',
                                            quality: cell.quality
                                        })}
                                        sizes="(max-width: 100vw) 1024px, 360px"
                                        className="w-full h-full"
                                        alt="Hello world"
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </section>
        </>
    );
}
