import React from 'react';

export default async function fetchs() {
  let result = '';

  await fetch('http://192.168.0.26:8080/nextjs/Next/test')
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });

  return result;
}
