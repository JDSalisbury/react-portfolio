import React from 'react';
import { Link } from 'react-router-dom';
import './TagList.css';

const TagList = ({ tags, className = 'tag-link', containerClassName = '' }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <>
      {tags.map((tag, index) => (
        <Link
          key={index}
          to={{ pathname: "/projects/tag/" + tag }}
          className={className}
        >
          {tag}
        </Link>
      ))}
    </>
  );
};

export default TagList;
