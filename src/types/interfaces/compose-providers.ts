import React from "react";

export interface IComposeProviderOptions<T>{
    providers?: any;//T[]
    children: React.ReactNode;
}