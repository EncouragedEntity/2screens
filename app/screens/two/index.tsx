import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import { useSelector, useDispatch } from '../../storage/utilities';
import AccountModule from '../../modules/account';

export default React.memo(() => {
  const profile = useSelector(state => state.account.profile);
  const dispatch = useDispatch();

  const handleChange = (field: keyof typeof profile, value: string) => {
   dispatch(AccountModule.profile({profile: {
      ...profile,
      [field]: value,
    }}));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Information</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={profile.name}
        onChangeText={text => handleChange('name', text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={profile.email}
        onChangeText={text => handleChange('email', text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={profile.phone}
        onChangeText={text => handleChange('phone', text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.inputMultiline}
        value={profile.bio}
        onChangeText={text => handleChange('bio', text)}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
    </ScrollView>
  );
});
