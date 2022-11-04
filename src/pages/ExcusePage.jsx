import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/excuse.css';
import ExcuseHeader from '../components/excuse-components/ExcuseHeader';
import ExcuseLinkContainer from '../components/excuse-components/ExcuseLinkContainer';
import ExcuseFooter from '../components/excuse-components/ExcuseFooter';
import ExcuseInfoContainer from '../components/excuse-components/ExcuseInfoContainer';
import ExcuseContainer from '../components/excuse-components/ExcuseContainer';

function ExcusePage() {
  const [excuse, setExcuse] = useState('');
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchFamilyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/family/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };
  const fetchOfficeExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/office/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };
  const fetchPartyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/party/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };

  const fetchDeveloperExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/developers/').then(
      (res) => {
        setExcuse(res.data[0]?.excuse);
      }
    );
  };

  const fetchCollegeExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/developers/').then(
      (res) => {
        setExcuse(res.data[0]?.excuse);
      }
    );
  };

  const fetchFunnyExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/funny/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };

  const fetchExaggeratedExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/unbelievable/').then(
      (res) => {
        setExcuse(res.data[0]?.excuse);
      }
    );
  };

  const fetchGamerExcuse = () => {
    Axios.get('https://excuser.herokuapp.com/v1/excuse/gaming/').then((res) => {
      setExcuse(res.data[0]?.excuse);
    });
  };

  const fetchData = () => {
    return value === 'developer'
      ? fetchDeveloperExcuse()
      : value === 'family'
      ? fetchFamilyExcuse()
      : value === 'party'
      ? fetchPartyExcuse()
      : value === 'college'
      ? fetchCollegeExcuse()
      : value === 'funny'
      ? fetchFunnyExcuse()
      : value === 'exaggerated'
      ? fetchExaggeratedExcuse()
      : value === 'gamer'
      ? fetchGamerExcuse()
      : fetchOfficeExcuse();
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <ExcuseHeader />
      <main className='excuseMain'>
        <ExcuseInfoContainer />
        <ExcuseContainer
          excuse={excuse}
          setExcuse={setExcuse}
          value={value}
          setValue={setValue}
          copied={copied}
          setCopied={setCopied}
          fetchData={fetchData}
        />
      </main>
      <div className='excuseStyleDiv'>
        <div className='excuseStyleCircle'></div>
      </div>
      <div className='excuseStyleContainer'>
        <ExcuseLinkContainer />
      </div>

      <div className='excuseStyleDivSecond'>
        <div className='excuseStyleCircleSecond'></div>
      </div>
      <ExcuseFooter />
    </div>
  );
}

export default ExcusePage;
