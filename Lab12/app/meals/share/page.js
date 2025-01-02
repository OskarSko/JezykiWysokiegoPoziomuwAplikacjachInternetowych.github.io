"use client";
import { useState } from 'react';

export default function SharePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Obsługa inputu plików
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Udostępniono posiłek:', formData);
    alert('Posiłek został udostępniony!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Share a Meal</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '400px',
          margin: '0 auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Tytuł */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        {/* Opis */}
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          ></textarea>
        </div>

        {/* Obrazek */}
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            style={{ width: '100%', marginTop: '5px' }}
          />
        </div>

        {/* Przycisk Submit */}
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Share Meal
        </button>
      </form>
    </div>
  );
}
