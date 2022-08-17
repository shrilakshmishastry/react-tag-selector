import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const TagsModal = ({ tags, inputString, selectedTag }) => {
  // const[matchCount,setMatchCount] = useState(false);
  // console.log(tags,inputString);
  let find = false;
  useEffect(() => { }, [inputString]);
  return (
    <div className='tagsContiner'>
      {
        tags && tags.map((value, index) => {

          if (value.includes(inputString)) {
            find = true;
            return (
              <div
                aria-label={value}
                tabIndex={1}
                key={value + index.toString()}>
                <button
                  tabIndex={1}
                  className='tagButton'
                  value={value}
                  onClick={() => selectedTag(value, index)}>
                  {value}
                </button>
              </div>
            );
          }

        })
      }
      {
        !find && <p>no match</p>
      }
    </div>

  );
};

TagsModal.propTypes = {
  tags: PropTypes.array,
  inputString: PropTypes.string,
  selectedTag: PropTypes.func
};

export default TagsModal;