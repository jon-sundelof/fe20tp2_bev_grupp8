import React, { useContext, useEffect, useState } from 'react';

import AddEmployee from './admin/AddEmployee';
import TotalCompValue from './data-card/total-comp-value/TotalCompValue';
import MostFollowedStocks from './data-card/most-followed-stocks/MostFollowedStocks';
/* import MostFollowedCrypto from './data-card/most-followed-crypto/MostFollowedCrypto'; */

import BarChartCard from './data-card/bar-chart-card/BarChartCard'
import RecentlyBought from './data-card/recently-bought/RecentlyBought';
/* import BoughtStocks from './data-card/bought-stocks/BoughtStocks' */

import { useDispatch, useSelector } from 'react-redux';
import { setOrganizationData } from '../../../redux/actions';

import { FirebaseContext } from '../../firebase/context';

import { Wrapper } from './ProfileDashboardElements';
import RecentlySold from './data-card/recently-sold/RecentlySold';

const ProfileDashboard = () => {
    const dispatch = useDispatch();
    const firebase = useContext(FirebaseContext);
    const user = JSON.parse(localStorage.getItem('authUser'));

    const OrganizationData = useSelector((state) => state.OrganizationData);

    const [admin, setAdmin] = useState(false);
    const [employee, setEmployee] = useState(false);
    //let OrgDataFirebase; //changed! placed in useEffect
    //let OrgData = [];
    //let data = ''; // changed!
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        let OrgData = [];
        let data = '';
        let OrgDataFirebase;
        const companyData = firebase.db.ref(
            'organizations/' + user.organization + '/users'
        );
        companyData.on('value', (snapshot) => {
            OrgDataFirebase = snapshot.val(); //varning!
            if (!OrgDataFirebase) return;

            for (const key in OrgDataFirebase) {
                OrgData.push({ ...OrgDataFirebase[key] });
            }

            dispatch(setOrganizationData(OrgData));
            /*       for (const [key, value] of Object.entries(OrgDataFirebase)) {
                   console.log(value.organization)
               } */
        });

        const isAdmin = firebase.db.ref('users/' + user.uid + '/roles');
        isAdmin.on('value', (snapshot) => {
            data = snapshot.val();
            if (!data) return;
            setAdmin(data.ADMIN === 'ADMIN' ? true : false);
            setEmployee(data.EMPLOYEE === 'EMPLOYEE' ? true : false);
        });
        return () => {
            setDidMount(false);
        };

    }, [didMount, dispatch, firebase.db, user.organization, user.uid]);
    //OrgData, dispatch, firebase.db, user.organization, user.uid
    //*Kanske skicka ned olika arrayer som props ned till components och inte kalla på de i components själva

    return (
        <Wrapper>
            {admin ? <AddEmployee /> : ''}
            {admin || employee ? (
                <>
                    <h2>
                        {!OrganizationData[0]
                            ? ''
                            : OrganizationData[0].organization}
                    </h2>
                    <TotalCompValue />
                    <BarChartCard />
              {/*       <MostFollowedStocks
                        orgName={
                            !OrganizationData[0]
                                ? ''
                                : OrganizationData[0].organization
                        }
                    /> */}
                    {/* <BoughtStocks /> */}
                 {/*    <MostFollowedCrypto
                        orgName={
                            !OrganizationData[0]
                                ? ''
                                : OrganizationData[0].organization
                        }
                    /> */}
                    <RecentlyBought />
                    <RecentlySold />
                </>
            ) : (
                <>
                    <h2>Not part of a organization</h2>
                    <span className="join-today">Join today...</span>
                </>
            )}
        </Wrapper>
    );
};

export default ProfileDashboard;
