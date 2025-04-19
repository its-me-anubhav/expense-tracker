"use client";
import { Switch } from '@/components/ui/switch';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { toast } from 'sonner';
import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle, } from '@/components/ui/card';
import { ArrowDownRight, ArrowUpRight,  } from 'lucide-react';
import useFetch from '@/hooks/use-fetch';
import { updateDefaultAccount } from '@/actions/accounts';

const AccountCard = ({ account }) => {
    const {name, type,balance, id, isDefault} = account;
    
    const {
      loading: updateDefaultLoading,
      fn: updateDefaultFn,
      data: updatedAccount,
      error,
    } = useFetch(updateDefaultAccount)

    const handleDefaultChange = async() => {
     event.preventDefault();
     if (isDefault) {
      toast.warning("You need atleast one default account");
      return;
     }
     await updateDefaultFn(id);
    };

    useEffect(() => {
      if(updatedAccount?.success){
        toast.success("Default account updated successfully")
      }
    },[updatedAccount, updateDefaultLoading])

    useEffect(() => {
      if(error){
        toast.error(error.message || "Failed to update default account")
      }
    },[error,])

  return (

    <div>
   <Card className="hover:shadow-md transition-shadow group ralative">
    <Link href={`/account/${id}`}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
      <Switch className="cursor-pointer" checked={isDefault} onClick={handleDefaultChange} 
      disabled={updateDefaultLoading} />
    </CardHeader>
    <CardContent>
      <div className='text-2xl font-bold'>
      ₹{parseFloat(balance).toFixed(2)}
      </div>
     <p className='text-xs text-muted-foreground  '>
      {type.charAt(0)+ type.slice(1).toLowerCase()} Account
      </p>
    </CardContent>
    <CardFooter className="flex justify-between text-sm text-muted-foreground pt-5">
      <div className='flex items-center'>
      <ArrowUpRight className='mr-1 h-4 w-4 text-green-600' />
      income
      </div>
      <div className='flex items-center'>
        <ArrowDownRight className='mr-1 h-4 w-4 text-purple-700' />
        Expense
      </div>
    </CardFooter>
   </Link>
  </Card>
  </div>
  )
}

export default AccountCard