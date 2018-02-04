import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';

const MemberList = props => {
  const { members } = props;

  return (
    <Grid columns={12} divided>
      {members.map(member => (
        <Grid.Column>
          <Image src={member.image} />
        </Grid.Column>
      ))}
    </Grid>
  );
};

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
};

MemberList.defaultProps = {
  members: [],
};
export default MemberList;
