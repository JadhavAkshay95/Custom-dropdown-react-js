import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faTimes,
} from "@fortawesome/fontawesome-free-solid";

const CustomMultiSelect = ({ listData, label, handleSelectedList, clear }) => {
  const [list, setList] = useState(() =>
    listData.map((item) => ({ item: item, selected: false }))
  );
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
    if (clear) {
      setList(
        list.map((item) => {
          item.selected = false;
          return item;
        })
      );
      setShow1(false);
    }
  }, [clear]);

  const selectItem = (checked, item, event) => {
    event.stopPropagation();
    setList(
      list.map((item1) => {
        if (item1.item === item.item) {
          item.selected = checked;
        }
        return item1;
      })
    );
    setShow1(list.some((item2) => item2.selected));
  };

  const clickHandler = () => {
    setShow(!show);
    handleSelectedList(list.filter((l) => l.selected).map((l) => l.item));
  };

  return (
    <>
      <div className="drop-down-naame">{label}</div>
      <div onClick={clickHandler} className="test99">
        {show1 ? (
          list.length &&
          list.map((item) => {
            return (
              item.selected && (
                <>
                  <div key={item.item} className="item-container">
                    <span className="items" key={item.item}>
                      {item.item}
                    </span>
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={($event) => selectItem(false, item, $event)}
                    />
                  </div>
                </>
              )
            );
          })
        ) : (
          <div className="placeholder-data">
            <span className="placeholder">Select {label} </span>
          </div>
        )}{" "}
        {!show ? (
          <FontAwesomeIcon className="icon-data" icon={faCaretDown} />
        ) : (
          <FontAwesomeIcon className="icon-data" icon={faCaretUp} />
        )}
      </div>
      <div className="dropdown-item">
        {show
          ? list.map((item) => {
              return (
                <>
                  <div className="ytt" key={item.item}>
                    <ul>{item.item}</ul>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={($event) =>
                        selectItem($event.target.checked, item, $event)
                      }
                    />
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default CustomMultiSelect;
