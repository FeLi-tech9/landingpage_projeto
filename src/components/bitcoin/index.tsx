'use client'

import React from 'react';

interface BitProps {
  imgClassname?: string;
  wrapperClassName?: string;
  width?: number | string;
  src?: string;
  alt?: string;
  imgStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

export default function Bit({
  imgClassname = '',
  wrapperClassName = '',
  width = 300,
  src = '/assets/bitcoin-rafiki.svg',
  alt = 'Bitcoin',
  imgStyle = {},
  wrapperStyle = {},
}: BitProps) {
  return (
    <div
      className={`bitcoin-image-wrapper ${wrapperClassName}`.trim()}
      style={{
        width,
        height: 'auto',
        display: 'flex',           // ativa flexbox
        justifyContent: 'center',  // centraliza horizontalmente
        alignItems: 'center',      // centraliza verticalmente
        ...wrapperStyle
      }}
    >
      <img
        src={src}
        alt={alt}
        className={imgClassname}
        style={{
          width: '100%',
          height: 'auto',
          ...imgStyle
        }}
      />
    </div>
  );
}

