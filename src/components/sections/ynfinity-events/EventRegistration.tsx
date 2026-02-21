'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

export const EventRegistration = () => {
    const [isOpen, setIsOpen] = useState(false);

    // We are retaining the modal structure but using the new Shadcn Dialog component architecture.
    return (
        <>
            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg" className="rounded-full shadow-xl hover:scale-105 transition-transform">
                            Register Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md max-h-[85vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-center mb-4">Register for the Event</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" name="firstName" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" name="lastName" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="designation">Designation</Label>
                                <Input id="designation" name="designation" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" name="company" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactNumber">Contact Number (Whatsapp)</Label>
                                <Input id="contactNumber" name="contactNumber" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="followUpPerson">Person to follow up</Label>
                                    <Input id="followUpPerson" name="followUpPerson" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="followUpContact">Contact</Label>
                                    <Input id="followUpContact" name="followUpContact" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mealPreference">Meal Preferences</Label>
                                <Select required name="mealPreference">
                                    <SelectTrigger id="mealPreference">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="veg">Veg</SelectItem>
                                        <SelectItem value="non-veg">Non-Veg</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="travelAssistance">Would you need any assistance with travel & accommodation?</Label>
                                <Select required name="travelAssistance">
                                    <SelectTrigger id="travelAssistance">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="pt-4 flex flex-col items-center space-y-6">
                                <Button type="submit" className="w-full rounded-full h-12 text-lg font-medium">
                                    Submit Registration
                                </Button>

                                {/* Because "tyn-logo.png" uses the new repo's standard logo as per user comment, we'll use a generic placeholder or refer to the header's generic text. But we can just use the YInfinity event logo we imported for the hero. */}
                                <Image
                                    src="/assets/ynfinity-events/YInfinity.png"
                                    alt="Organization Logo"
                                    width={160}
                                    height={80}
                                    className="object-contain w-32 h-auto opacity-80"
                                />
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};
