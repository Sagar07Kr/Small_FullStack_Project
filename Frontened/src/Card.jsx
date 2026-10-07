
import React from 'react';

function Card({ data }) {
  console.log(data);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        margin: 'auto'
      }}
    >
      {data.map((pro) => {
        return (
          <div
            key={pro.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.12)',
              border: '1px solid #eeeeee',
              transition: '0.3s',
              overflow: 'hidden'
            }}
          >
            {/* Product Image */}
            <img
              src={pro.thumbnail}
              alt={pro.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'contain',
                borderRadius: '10px',
                backgroundColor: '#f8f8f8',
                marginBottom: '15px'
              }}
            />

            {/* Category */}
            <p
              style={{
                color: '#777',
                fontSize: '14px',
                textTransform: 'capitalize',
                margin: '5px 0'
              }}
            >
              {pro.category}
            </p>

            {/* Title */}
            <h2
              style={{
                fontSize: '20px',
                color: '#222',
                margin: '8px 0',
                minHeight: '50px'
              }}
            >
              {pro.title}
            </h2>

            {/* Description */}
            <p
              style={{
                color: '#666',
                fontSize: '14px',
                lineHeight: '1.5',
                height: '65px',
                overflow: 'hidden'
              }}
            >
              {pro.description}
            </p>

            {/* Rating */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '12px 0'
              }}
            >
              <span
                style={{
                  backgroundColor: '#fff3cd',
                  color: '#856404',
                  padding: '5px 9px',
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                ⭐ {pro.rating}
              </span>

              <span
                style={{
                  color: '#777',
                  fontSize: '14px'
                }}
              >
                Rating
              </span>
            </div>

            {/* Price */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '10px 0'
              }}
            >
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#16a34a'
                }}
              >
                ${pro.price}
              </span>

              <span
                style={{
                  fontSize: '14px',
                  color: '#e63946',
                  fontWeight: 'bold'
                }}
              >
                {pro.discountPercentage}% OFF
              </span>
            </div>

            {/* Stock */}
            <p
              style={{
                color: pro.stock > 10 ? '#16a34a' : '#e63946',
                fontWeight: 'bold',
                margin: '8px 0 15px'
              }}
            >
              {pro.stock > 10
                ? `✓ ${pro.stock} items available`
                : `⚠ Only ${pro.stock} left`}
            </p>

            {/* Button */}
            <button
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#2563eb',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Card;

