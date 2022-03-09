import {Checkbox, Radio, RadioGroup, TextInput} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {XyzTransition} from "@animxyz/react";
import {FaSearch} from "react-icons/fa";

function Search({handleSearch, isOpen, ref}) {
  const isMidScreen = useMediaQuery({query: "(min-width: 768px)"});
  return (
    <>
      <XyzTransition xyz="fade right">
        {(isOpen || isMidScreen) && (
          <div
            ref={ref}
            className=" absolute bg-white/90 md:static right-0 -top-32 left-[100px] p-8 pt-14 md:p-0 md:bg-transparent lg:mx-20 col-span-3 lg:col-span-2   order-1 text-gray-800   md:-translate-y-32"
          >
            <div className="  lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
              <div className="text-xl font-semibold  text-gray-900 mb-2">Search Tours</div>
              <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet</p>
              <TextInput onChange={handleSearch} size="lg" rightSection={<FaSearch />} placeholder="Search Location" />
            </div>
            <div className="   lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
              <div className="text-xl font-semibold  text-gray-900 mb-2">Tours Categories</div>
              <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet rye</p>
              <div className="flex flex-col gap-y-4 ml-4">
                <Checkbox label="Adventure Tours" color="pink" radius="xl" size="md" />
                <Checkbox label="City Tours" color="pink" radius="xl" size="md" />
                <Checkbox label="Single Tours" color="pink" radius="xl" size="md" />
                <Checkbox label="Group Tours" color="pink" radius="xl" size="md" />
              </div>
            </div>
            <div className="   lg:shadow-2xl border-t-4 border-pink-500 shadow-gray-300 bg-white p-4 py-10 mb-8 ">
              <div className="text-xl font-semibold  text-gray-900 mb-2">Date Range</div>
              <p className="font-light text-sm text-gray-400 leading-4 tracking-wider mb-6">Lorem ipsum dolor sit amet rye</p>
              <div className="flex flex-col gap-y-4 ml-4">
                <RadioGroup variant="vertical" spacing="lg" size="md" color="pink">
                  <Radio value="1 3"> 1 - 3 </Radio>
                  <Radio value="3 5"> 3 - 5 </Radio>
                  <Radio value="5 6"> 5 - 6 </Radio>
                  <Radio value="6 "> 6 - Above </Radio>
                </RadioGroup>
              </div>
            </div>
          </div>
        )}
      </XyzTransition>
    </>
  );
}

export default Search;
