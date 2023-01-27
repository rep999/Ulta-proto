import Head from 'next/head';
import { useState, useEffect } from 'react';
// REPorts
// @ts-ignore
import Header from '$Sections/Header/Header';
// @ts-ignore
import Nav from '$Sections/Nav/Nav';
// @ts-ignore
import Panel from '$Sections/Panel/Panel';
import { useRouter } from 'next/router';
// @ts-ignore
import Dash from '$Sections/Dash/Dash';
import styled from 'styled-components';
import create from 'zustand';
import { supabase } from '../../../client.js';
import cookie from 'cookie';

interface Fire {
    count?: string;
    created_at?: string;
    id?: string;
    text?: string;
    text_title?: string;
    title?: string;
    topic?: string;
    url?: string;
}

export async function getServerSideProps() {
    let { data: fires, error } = await supabase.from('fires').select('*');

    if (!fires) {
        return {
            notFound: true,
        };
    }
    return {
        props: { fires }, // will be passed to the page component as props
    };
}

// @ts-ignore
export default function Home({ fires }: Fire) {
    // const topicsSelected = useStore((state) => state.topicsSelected);
    // const topicsEnum = useStore((state) => state.topics);
    // const selectTopic = useStore((state) => state.selectTopic);

    const useStore = create((set) => ({
        topicSelection: 'monkey',
    }));
    const [isLoading, setIsLoading] = useState(true);
    const [session, setSession] = useState<any>(null);
    const [session2, setSession2] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        let mounted = true;

        async function getInitialSession() {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            console.log(`session`);
            console.log(session);
            // only update the react state if the component is still mounted
            if (mounted) {
                if (session) {
                    setSession(session);
                }
                setIsLoading(false);
            }
        }

        getInitialSession();

        // const { subscription } = supabase.auth.onAuthStateChange(
        //   (_event, session) => {
        //     setSession(session)
        //   }
        // )

        return () => {
            mounted = false;
            // subscription?.unsubscribe()
        };
    }, []);

    return (
        <WebFire_App>
            <Head>
                <title>UB Media Portal</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='HandheldFriendly' content='True'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
                {/* <link rel='icon' href='/favicon.ico' /> */}
            </Head>

            <WebFire_App_Shell_Parent>
                <WebFire_App_Shell>
                    <Header></Header>
                    <WebFire_App_Shell_Content>
                        <Nav></Nav>
                        <MainFlexContainer>
                            {/* @ts-ignore */}
                            <Dash fires={fires}></Dash>
                            <Panel></Panel>
                        </MainFlexContainer>
                    </WebFire_App_Shell_Content>
                </WebFire_App_Shell>
            </WebFire_App_Shell_Parent>
        </WebFire_App>
    );
}

const WebFire_App = styled.div`
    border: 2px solid white;
    height: 100%;
    width: 100%;
    display: block;
`;

const WebFire_App_Shell_Parent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #1a1b1c;
`;

const WebFire_App_Shell = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
`;

const WebFire_App_Shell_Content = styled.div`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
    border: 2px solid white;
`;

const MainFlexContainer = styled.main`
    display: flex;
    /* flex: 1 1 auto; */
    width: calc(100% - 166px);
    left: 166px;
    overflow: hidden;
    left: 166px;
    position: relative;
    border: 3px solid white;
    border-top-left-radius: 12px;
`;
