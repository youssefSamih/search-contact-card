import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import useListStyles from './style';
import contactData from '../../data/contact.json';

const ListIContact = () => {
  const classes = useListStyles();
  return (
    <List className={classes.list}>
      {contactData.map((data) => (
        <>
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
        </>
      ))}
    </List>
  );
};

export default ListIContact;
