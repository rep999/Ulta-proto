import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '$styles/Home.module.css';
// REPorts
import Header from 'src/!Sections^/Header/Header';
import Dash from 'src/!Sections^/Dash/Dash';
import Nav from 'src/!Sections^/Nav/Nav';
import Panel from 'src/!Sections^/Panel/Panel';
import Auth from 'src/@components^/Auth';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Home() {

    return <Auth />;
}
