import * as React from 'react';
import {Text} from 'react-native';
import { Colors } from './Config';
import { ScaledSheet } from 'react-native-size-matters';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MyText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  title,
  style,
  green,
  ...rest
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {color:Colors.Default},
        h1 && {fontSize: scale(48)},
        h2 && {fontSize: scale(32)},
        h3 && {fontSize: scale(20)},
        h4 && {fontSize: scale(18)},
        h5 && {fontSize: scale(16)},
        p && {fontSize: 12},
        green &&{color:Colors.Theme},
        bold && {fontWeight: 'bold'},
        italic && {fontStyle: 'italic'},
        style,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};

export default MyText;


const styles = ScaledSheet.create({
  container: {
      width: '100@s', // = scale(100)
      height: '200@vs', // = verticalScale(200)
      padding: '2@msr', // = Math.round(moderateScale(2))
      margin: 5
  },
  row: {
      padding: '10@ms0.3', // = moderateScale(10, 0.3)
      width: '50@ms', // = moderateScale(50)
      height: '30@mvs0.3' // = moderateVerticalScale(30, 0.3)
  }
});
