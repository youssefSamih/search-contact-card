import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import useListStyles from './style';
import contactData from '../../data/contact.json';

const ListIContact = () => {
  const classes = useListStyles();
  const [state, setContactData] = useState(contactData);
  if (state.length <= 0) {
    setContactData(contactData);
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const searchedContact = state.filter(
      (val) => val.fullName === e.target.value
    );
    setContactData(searchedContact);
  };
  return (
    <>
      <TextField id="standard-basic" label="Standard" onChange={handleChange} />
      <List className={classes.list}>
        {state.map((data) => (
          <Fragment key={data.userId}>
            <ListItem button className={classes.listItem}>
              <ListItemAvatar className={classes.listAvatarContainer}>
                <>
                  <div className={classes.avatarContainer} />
                  <div className={classes.avatarTrust}>{data.trust}</div>
                  <Avatar
                    alt="Profile Picture"
                    className={classes.listAvatarLarge}
                    src={data.profileImageUrl}
                  />
                </>
              </ListItemAvatar>
              <ListItemText
                primary={data.fullName}
                secondary="nessuna connessione"
              />
              <Button className={classes.listAddContact}>+</Button>
            </ListItem>
            <Divider />
            <ListItem className={classes.listInfo}>
              <ListItemText
                className={classes.listInfoText}
                primary="Sta già condividendo Disney Plus"
              />
            </ListItem>
          </Fragment>
        ))}
      </List>
    </>
  );
};

export default ListIContact;
