'use client';
import React, { useState, useEffect, ObjectHTMLAttributes } from 'react';
import styles from './Cursor.module.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    target.id === 'title-name' ? setHoverEffect(true) : setHoverEffect(false);

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
    );
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};
  let cursorSize;

  // hoverEffect ? (cursorSize = 120) : (cursorSize = 30);
  // isPointer ? (cursorSize = 0) : (cursorSize = 30);

  if (hoverEffect) {
    cursorSize = 120;
  } else {
    cursorSize = 30;
  }

  if (isPointer) {
    cursorSize = 0;
  } else {
    cursorSize = 30;
  }

  console.log(cursorSize);

  return (
    <div
      className={styles['custom-cursor']}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    ></div>
  );
};
export default Cursor;
