import React, { useState } from "react";
import { useTable, UseFailures, useSortBy, useFilters } from "react-table";
import "./style.css"

export default const Table ({ columns, data }) => {

    const [filterNameInput, setFilterNameInput] = useState('');
    const [filterOccupationInput, setFilterOccupationInput] = useState('');
    const [filterDepartmentInput, setFilterDepartmentInput] = useState('');

        const {

            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            setilter

        } = useTable (

            {

                columns,
                data

            },

            useFilters,
            useSortBy

        );

            const handleFilterChangeName = event => {

                const value = event.target.value || undefined;
                setFilter('name', value);
                setFilterNameInput(value);

            };

            const handleFilterChangeOccupation = event => {

                const value = event.target.value || undefined;
                setFilter('occupation', value);
                setFilterOccupationInput(value);

            };

            const handFilterChangeDepartment = event => {

                const value = event.target.value || undefined;
                setFilter('department', value);
                setFilterDepartmentInput(value);
                
            };

            return (

            )

} 