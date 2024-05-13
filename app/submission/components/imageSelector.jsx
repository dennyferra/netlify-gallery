'use client';

import { useMemo, useState } from 'react';
import { getImageUrl } from 'utils';

export function ImageSelector({ onAdd, onClear }) {
    const [selected, setSelected] = useState(null);
    const imageKeys = useMemo(() => [...Array(17).keys()].slice(1), []);
    const [form, setForm] = useState({ width: 1, height: 1, quality: 90 });

    const handleAdd = () => onAdd?.({ selected, ...form });
    const handleClear = () => onClear?.();

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold sm:text-2xl">Select Image</h2>
            <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral rounded-box overflow-x-auto">
                {imageKeys.map((key) => (
                    <div className="carousel-item h-28 w-40" key={key}>
                        <img
                            srcSet={getImageUrl(`${key}.jpg`)}
                            sizes="(max-width: 100vw) 160px, 160px"
                            className={`max-h-28 w-40 rounded-xl cursor-pointer ${
                                selected === key ? 'border-2 border-blue-500' : 'border border-neutral'
                            }`}
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
                        <div className="w-32">
                            Width
                            <br />
                            <select
                                value={form.width}
                                onChange={(e) => setForm({ ...form, width: Number(e.target.value) })}
                                className="select select-sm bg-blue-900"
                            >
                                <option value={1}>1 Column</option>
                                <option value={2}>2 Column</option>
                            </select>
                        </div>
                        <div className="w-32">
                            Height
                            <br />
                            <select
                                value={form.height}
                                onChange={(e) => setForm({ ...form, height: Number(e.target.value) })}
                                className="select select-sm bg-blue-900"
                            >
                                <option value={1}>Full</option>
                                {form.width !== 2 ? <option value={2}>Half</option> : null}
                            </select>
                        </div>
                        <div className="w-32">
                            Quality
                            <br />
                            <input
                                className="input input-sm bg-blue-900"
                                type="number"
                                step="1"
                                min="10"
                                max="100"
                                value={form.quality}
                                onChange={(e) => setForm({ ...form, quality: Number(e.target.value) })}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <button className="btn btn-sm btn-primary" disabled={!selected} onClick={handleAdd}>
                            Add to Collagery
                        </button>
                        <button className="btn btn-sm btn-warning" onClick={handleClear}>
                            Clear Collagery
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
