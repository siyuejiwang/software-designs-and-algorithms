import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import dataConverter from './util/dataConvert';
import rows from './mocks/rows.json';

import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(undefined);
  const [storeData, setStoreData] = useState<Row[]>(mockedData);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<string[]>([]);
  const [sort, setSort] = useState<'asc' | 'desc'>(undefined);
  const onInputChange = (value: string) => {
    setInput(value);
  };
  const onFilterChange = (value: string[]) => {
    setFilter(value);
  };
  const onSortChange = (value: 'asc' | 'desc') => {
    setSort(value);
  };
  const refilterTable = () => {
    const filterData = storeData.filter((data: Row) => {
      return (
        (input && data.country.toLowerCase().includes(input.toLowerCase())) ||
        (filter.length &&
          filter.find((post: string) => {
            if (post == 'More than 100 posts') {
              return data.posts >= 100;
            } else {
              return !data.posts;
            }
          })) ||
        !input && !filter.length
      );
    });
    sort &&
      filterData.sort((a: Row, b: Row) => {
        return sort === 'asc' ? a.posts - b.posts : b.posts - a.posts;
      });
    setData(filterData);
  };
  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const ConvertData = dataConverter(users, accounts, images);
        setData(ConvertData);
        setStoreData(ConvertData);
      }
    );
  }, []);
  useEffect(() => {
    refilterTable();
  }, [input, filter, sort]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateStore={onFilterChange} />
            <Sort updateStore={onSortChange} />
          </div>
          <Search updateStore={onInputChange} />
        </div>
        <Table rows={data || mockedData} />
      </div>
    </StyledEngineProvider>
  );
};
