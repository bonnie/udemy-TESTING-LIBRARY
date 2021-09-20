import React, { useEffect, useState, useCallback } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import styles from "./Options.module.css";

interface Option {
  name: string;
  imagePath: string;
}
const Options: React.FC<{ optionType: string }> = ({ optionType }) => {
  const [options, setOptions] = useState<Option[] | null>();
  const getDataFromDb = useCallback(async () => {
    const res = await fetch(`http://localhost:3030/${optionType}`);
    const body = await res.json();
    console.log(body);
    setOptions(body);
  }, [optionType]);

  useEffect(() => {
    getDataFromDb();
  }, [getDataFromDb]);

  return (
    <>
      <h2 className={styles.header}>{optionType.toUpperCase()}</h2>
      <List style={{ maxWidth: "200px", margin: "0 auto" }}>
        {options &&
          options.length > 0 &&
          options.map((option) => {
            return (
              <React.Fragment key={option.name}>
                <ListItem>
                  <ListItemIcon>
                    <img
                      style={{ maxWidth: "50px" }}
                      src={`http://localhost:3030/${option.imagePath}`}
                      alt={`${option.name} ${optionType}`}
                    />
                  </ListItemIcon>
                  <ListItemText primary={option.name} />
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
    </>
  );
};

export default Options;
