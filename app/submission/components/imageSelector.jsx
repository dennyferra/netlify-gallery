'use client';

import { useMemo, useState } from 'react';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();
const forceWebP = true;

const site = 'https://collagery.netlify.app';
const getImageUrl = (name, quality = 80) =>
    [160, 360, 1024]
        .map((size) => {
            return `${site}/.netlify/images?url=images/${name}&w=${size}&q=${quality}${
                forceWebP ? '&fm=webp' : ''
            } ${size}w`;
        })
        .join(', ');

export function ImageSelector() {
    const [selected, setSelected] = useState(null);
    const imageKeys = useMemo(() => [...Array(17).keys()].slice(1), []);

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold sm:text-2xl">Select Image</h2>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box overflow-x-auto">
                {imageKeys.map((key) => (
                    <div className="carousel-item h-28 w-40" key={key}>
                        <img
                            srcSet={getImageUrl(`${key}.jpg`)}
                            sizes="(max-width: 100vw) 160px, 160px"
                            className="max-h-28 w-40 rounded-xl"
                            alt={key}
                            onClick={() => setSelected(key)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex w-full bg-slate-950 rounded-xl p-2 gap-x-2 items-stretch">
                <div className="w-1/3 h-64 bg-slate-900 rounded-xl p-2 border-dashed border-white border-2 flex items-center justify-center">
                    {selected ? (
                        <img
                            srcSet={getImageUrl(`${selected}.jpg`)}
                            sizes="(max-width: 100vw) 360px, 360px"
                            className="rounded-xl w-full h-full"
                            alt={selected}
                        />
                    ) : (
                        <div>Image Preview</div>
                    )}
                </div>
                <div className="flex flex-col items-stretch w-2/3 h-auto bg-slate-800 rounded-xl p-2">
                    <div>Settings</div>
                    <div className="flex justify-between items-start h-full flex-col md:flex-row">
                        <div className="w-32">Column: 1</div>
                        <div className="w-32">
                            Width
                            <br /> 1 col, 2 col
                        </div>
                        <div className="w-32">
                            Height
                            <br /> full, half
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <button className="btn btn-sm btn-primary">Add Image</button>
                        <button className="btn btn-sm btn-warning">Remove Last</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
