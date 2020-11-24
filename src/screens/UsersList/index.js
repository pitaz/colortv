import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {searchUsers} from '../../redux/actions/searchUsers';
import {styles} from './styles';
import UserRow from './UserRow';
import EmptyPlaceholder from '../../components/EmptyState';
import Search from '../../components/Search';

const UsersList = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState();
  const [query, setQuery] = useState('');
  const {loading} = useSelector((state) => state.searchUsers);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await dispatch(searchUsers(query, 1));
        setSearchResult(result?.payload?.results);
      } catch (e) {
        console.log('error', e);
      }
    };

    getUsers();
  }, [dispatch, query]);

  return (
    <SafeAreaView style={styles.pageWrapper}>
      <View style={styles.container}>
        <Search setQuery={setQuery} />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            style={styles.list}
            data={searchResult}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <UserRow user={item} />}
            ListEmptyComponent={EmptyPlaceholder}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default UsersList;
